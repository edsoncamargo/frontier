import { AccountType, Role } from '@prisma/client';

import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';
import { prisma } from '../../../lib/prisma';
import { z as validate } from 'zod';

type FiltersType = {
  email?: string;
  account_type?: AccountType;
  role?: Role;
};

export async function getUserAdminRoute(app: FastifyInstance) {
  app.withTypeProvider<ZodTypeProvider>().get(
    '/',
    {
      schema: {
        querystring: validate.object({
          email: validate
            .string()
            .email({ message: 'O email inserido não é válido' })
            .optional()
            .or(validate.string().length(0)),
          account_type: validate
            .string()
            .transform((value) => value.toUpperCase())
            .refine(
              (value) =>
                Object.values(AccountType).includes(value as AccountType),
              'Tipo de conta inválida.'
            )
            .optional()
            .or(validate.string().length(0)),
          role: validate
            .string()
            .transform((value) => value.toUpperCase())
            .refine(
              (value) => Object.values(Role).includes(value as Role),
              'Role inválida.'
            )
            .optional()
            .or(validate.string().length(0)),
          page: validate.string().optional().or(validate.string().length(0)),
          itemsPerPage: validate
            .string()
            .optional()
            .or(validate.string().length(0)),
        }),
      },
    },
    async (request, reply) => {
      const { email, account_type, page, itemsPerPage, role } = request.query;
      const filters = buildFilters(email, account_type, role);
      const totalItems = await prisma.user.count();
      const pagination = calculatePagination(page, itemsPerPage, totalItems);
      const skip =
        pagination.currentPage && pagination.itemsPerPage
          ? (pagination.currentPage - 1) * pagination.itemsPerPage
          : undefined;
      const users = await prisma.user.findMany({
        where: filters,
        skip,
        take: pagination.itemsPerPage,
      });

      reply.send({
        users,
        pagination,
      });
    }
  );
}

const buildFilters = (
  email?: string,
  account_type?: string,
  role?: string
): FiltersType => {
  const filters: FiltersType = {};
  if (email) filters.email = email;
  if (account_type) filters.account_type = account_type as AccountType;
  if (role) filters.role = role as Role;
  return filters;
};

const calculatePagination = (
  page: string | undefined,
  itemsPerPage: string | undefined,
  totalItems: number
) => {
  const currentPage = page ? parseInt(page) : undefined;
  const perPage = itemsPerPage ? parseInt(itemsPerPage) : undefined;
  const totalPages = perPage ? Math.ceil(totalItems / perPage) : 0;

  return {
    currentPage:
      currentPage && currentPage > totalPages ? totalPages : currentPage,
    itemsPerPage: perPage,
    totalPages,
    totalItems,
  };
};
