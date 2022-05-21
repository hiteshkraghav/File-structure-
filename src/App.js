import logo from './logo.svg';
import './App.css';
import FileStructure from './components/FileStructure'
const fileStructureObj =
{
  fileName:'root',
  isSubFolder:true,
  
  items:[
    {
      fileName:'root->child1',
      isSubFolder:false,
    },
    {
      fileName:'root->child2',
      isSubFolder:true,
      items:[
        {
          fileName:'child2-1',
          isSubFolder:false,
        }
      ]
    },
    {
      fileName:'root->child4',
      isSubFolder:true,
      items:[  {
        fileName:'child4-1',
        isSubFolder:false,
      },
      {
        fileName:'child4-2',
        isSubFolder:true,
        items:[  {
          fileName:'child42-1',
          isSubFolder:true,
          items:[   {
            fileName:'child421-1',
            isSubFolder:false,
          }]
        }]
      },
     ]
    }
  ]

}
// [{
//        fileName:'cities',
//        isSubFolder:true,
//        uudi:'213nbsfbafh45b'
//       //  x[items]=response;
// },
// {
//   fileName:'Continents',
//   isSubFolder:true,
//   uudi:'213nbsfbd45bafh45b'
// },
      
//   ]

function App() {
  return (
    <div style={{border:'blue'}} className="App">
     <FileStructure files={fileStructureObj}/>
      </div>
  );
}

export default App;
