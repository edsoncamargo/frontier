import {
  FaImage,
  FaImages,
  FaQuoteLeft,
  FaSackDollar,
  FaSignature,
  FaVault,
} from 'react-icons/fa6';
import { PanelDashboard, PanelType } from './panel/panel.dashboard.admin';

import { Sidebar } from './panel/sidebar/sidebar';
import { useParams } from 'react-router-dom';

export function RootDashboard() {
  const { category } = useParams();

  function generatePanelStructure(): PanelType['structure'] {
    switch (category) {
      case 'farms':
        return {
          panelTitle: 'Farms',
          forms: [
            {
              type: {
                field: 'string',
                placeholder: 'Digite o nome',
                icon: <FaSignature />,
              },
            },
            {
              price: {
                field: 'number',
                placeholder: 'Digite o preço',
                icon: <FaSackDollar />,
              },
              monthly_price: {
                field: 'number',
                placeholder: 'Digite o preço mensal',
                icon: <FaVault />,
              },
            },
            {
              description: {
                field: 'string',
                placeholder: 'Digite a descrição',
                icon: <FaQuoteLeft />,
              },
            },
            {
              cover: {
                field: 'string',
                placeholder: 'Digite a url da capa',
                icon: <FaImage />,
              },
            },
            {
              images: {
                field: 'image',
                icon: <FaImages />,
              },
            },
          ],
        };
      case 'houses':
        return {
          panelTitle: 'Houses',
          forms: [
            {
              type: {
                field: 'string',
                placeholder: 'Digite o nome',
                icon: <FaSignature />,
              },
            },
            {
              price: {
                field: 'number',
                placeholder: 'Digite o preço',
                icon: <FaSackDollar />,
              },
              monthly_price: {
                field: 'number',
                placeholder: 'Digite o preço mensal',
                icon: <FaVault />,
              },
            },
            {
              description: {
                field: 'string',
                placeholder: 'Digite a descrição',
                icon: <FaQuoteLeft />,
              },
            },
            {
              cover: {
                field: 'string',
                placeholder: 'Digite a url da capa',
                icon: <FaImage />,
              },
            },
            {
              images: {
                field: 'image',
                icon: <FaImages />,
              },
            },
          ],
        };
      case 'upgrades':
        return {
          panelTitle: 'Upgrades',
          forms: [
            {
              type: {
                field: 'string',
                placeholder: 'Digite o nome',
                icon: <FaSignature />,
              },
            },
            {
              price: {
                field: 'number',
                placeholder: 'Digite o preço',
                icon: <FaSackDollar />,
              },
              monthly_price: {
                field: 'number',
                placeholder: 'Digite o preço mensal',
                icon: <FaVault />,
              },
            },
            {
              description: {
                field: 'string',
                placeholder: 'Digite a descrição',
                icon: <FaQuoteLeft />,
              },
            },
            {
              cover: {
                field: 'string',
                placeholder: 'Digite a url da capa',
                icon: <FaImage />,
              },
            },
            {
              images: {
                field: 'image',
                icon: <FaImages />,
              },
            },
          ],
        };
      case 'extras':
        return {
          panelTitle: 'Extras',
          forms: [
            {
              type: {
                field: 'string',
                placeholder: 'Digite o nome',
                icon: <FaSignature />,
              },
            },
            {
              price: {
                field: 'number',
                placeholder: 'Digite o preço',
                icon: <FaSackDollar />,
              },
              monthly_price: {
                field: 'number',
                placeholder: 'Digite o preço mensal',
                icon: <FaVault />,
              },
            },
            {
              description: {
                field: 'string',
                placeholder: 'Digite a descrição',
                icon: <FaQuoteLeft />,
              },
            },
            {
              cover: {
                field: 'string',
                placeholder: 'Digite a url da capa',
                icon: <FaImage />,
              },
            },
            {
              images: {
                field: 'image',
                icon: <FaImages />,
              },
            },
          ],
        };

      default:
        return {
          panelTitle: 'Vips',
          forms: [
            {
              type: {
                field: 'string',
                placeholder: 'Digite o nome',
                icon: <FaSignature />,
              },
            },
            {
              price: {
                field: 'number',
                placeholder: 'Digite o preço',
                icon: <FaSackDollar />,
              },
              monthly_price: {
                field: 'number',
                placeholder: 'Digite o preço mensal',
                icon: <FaVault />,
              },
            },
            {
              description: {
                field: 'string',
                placeholder: 'Digite a descrição',
                icon: <FaQuoteLeft />,
              },
            },
            {
              cover: {
                field: 'url',
                placeholder: 'Digite a url da capa',
                icon: <FaImage />,
              },
              images: {
                field: 'image',
                placeholder: 'Digite uma url de cada vez (grid)',
                icon: <FaImages />,
              },
            },
          ],
        };
    }
  }

  return (
    <div className='grid -m-6'>
      <Sidebar />

      <div className='h-full ml-[calc(67.2px)] p-10 py-4 overflow-x-hidden'>
        <PanelDashboard structure={generatePanelStructure()} />
      </div>
    </div>
  );
}
