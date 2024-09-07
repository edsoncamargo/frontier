import { PanelDashboard } from './panel/panel.dashboard.admin';
import { Sidebar } from './panel/sidebar/sidebar';
import { useParams } from 'react-router-dom';

export function RootDashboard() {
  const { category } = useParams();

  function generatePanelStructure() {
    switch (category) {
      case 'farms':
        return JSON.stringify({
          panelTitle: 'Farms',
          forms: {
            type: 'string',
          },
        });
      case 'houses':
        return JSON.stringify({
          panelTitle: 'Houses',
          forms: {
            type: 'string',
          },
        });
      case 'upgrades':
        return JSON.stringify({
          panelTitle: 'Upgrades',
          forms: {
            type: 'string',
          },
        });
      case 'extras':
        return JSON.stringify({
          panelTitle: 'Extras',
          forms: {
            type: 'string',
          },
        });

      default:
        return JSON.stringify({
          panelTitle: 'Vips',
          forms: {
            type: 'string',
          },
        });
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
