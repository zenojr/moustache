import React from 'react';
import ReactDOM from 'react-dom';
import FolderTree from 'react-folder-tree';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();







const folderList = {
  "id": 1,
  "filename": "Todas",
  "children": [
    {
      "id": 2,
      "filename": "Contabilidade",
      "children": [
        {
          "id": 3,
          "filename": "Documentos",
          "children": [
    {
      "id": 4,
      "filename": "For Sale",
      "children": [
        {
          "id": 5,
          "filename": "Audio & Stereo",
        },
        {
          "id": 6,
          "filename": "Baby & Kids Stuff",
        },
        {
          "id": 7,
          "filename": "Music, Films, Books & Games",
        }
      ]
    },
    {
      "id": 8,
      "filename": "Motors",
      "children": [
        {
          "id": 9,
          "filename": "Car Parts & Accessories",
        },
        {
          "id": 10,
          "filename": "Cars",
        },
        {
          "id": 11,
          "filename": "Motorbike Parts & Accessories",
        }
      ]
    },
    {
      "id": 12,
      "filename": "Jobs",
      "children": [
        {
          "id": 13,
          "filename": "Accountancy",
        },
        {
          "id": 14,
          "filename": "Financial Services & Insurance",
        },
        {
          "id": 15,
          "filename": "Bar Staff & Management",
        }
      ]
    }
  ]
        },
        {
          "id": 16,
          "filename": "Baby & Kids Stuff",
        },
        {
          "id": 17,
          "filename": "Music, Films, Books & Games",
        }
      ]
    },
    {
      "id": 18,
      "filename": "Motors",
      "children": [
        {
          "id": 19,
          "filename": "Car Parts & Accessories",
        },
        {
          "id": 20,
          "filename": "Cars",
        },
        {
          "id": 21,
          "filename": "Motorbike Parts & Accessories",
        }
      ]
    },
    {
      "id": 22,
      "filename": "Jobs",
      "children": [
        {
          "id": 23,
          "filename": "Accountancy",
        },
        {
          "id": 24,
          "filename": "Financial Services & Insurance",
        },
        {
          "id": 25,
          "filename": "Bar Staff & Management",
        }
      ]
    }
  ]
}

ReactDOM.render(
  <FolderTree
    data={folderList}
  />,
	document.getElementById('folders')
)
