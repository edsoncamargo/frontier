import { ComponentProps, ReactNode } from 'react';
import { VariantProps, tv } from 'tailwind-variants';

type TableProps = {
  children: ReactNode;
};

function Table({ children }: Readonly<TableProps>) {
  return (
    <div className='overflow-auto relative table-auto whitespace-nowrap rounded-md'>
      <table className='w-full'>{children}</table>
    </div>
  );
}

type HeaderProps = {
  children: ReactNode;
};

function Header({ children }: Readonly<HeaderProps>) {
  return <thead>{children}</thead>;
}

const row = tv({
  base: 'h-12',
  variants: {
    variant: {
      header: 'font-extrabold bg-zinc-950/80 border-b-2 border-paragraph-50/50',
      odd: 'bg-zinc-900/80',
      even: 'bg-zinc-950/80',
    },
  },
  defaultVariants: {
    variant: 'odd',
  },
});

type RowProps = ComponentProps<'tr'> &
  VariantProps<typeof row> & {
    children: ReactNode;
  };

function Row({ children, variant }: Readonly<RowProps>) {
  return <tr className={row({ variant })}>{children}</tr>;
}

const headerCell = tv({
  base: 'text-start px-3 max-w-56 truncate overflow-hidden whitespace-nowrap',
  variants: {
    variant: {
      normal: '',
      freeze: 'sticky right-0',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});

type HeaderCellProps = ComponentProps<'th'> &
  VariantProps<typeof headerCell> & {
    children: ReactNode;
  };

function HeaderCell({ children, variant }: Readonly<HeaderCellProps>) {
  return <th className={headerCell({ variant })}>{children}</th>;
}

type BodyProps = {
  children: ReactNode;
};

function Body({ children }: Readonly<BodyProps>) {
  return <tbody>{children}</tbody>;
}

const cell = tv({
  base: 'px-3 max-w-56 truncate overflow-hidden whitespace-nowrap',
  variants: {
    variant: {
      normal: '',
      freeze: 'sticky right-0',
    },
  },
  defaultVariants: {
    variant: 'normal',
  },
});

type CellProps = ComponentProps<'td'> &
  VariantProps<typeof cell> & {
    children: ReactNode;
  };

function Cell({ children, variant }: Readonly<CellProps>) {
  return <td className={cell({ variant })}>{children}</td>;
}

Table.Header = Header;
Table.Row = Row;
Table.HeaderCell = HeaderCell;
Table.Body = Body;
Table.Cell = Cell;

export default Table;
