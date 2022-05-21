
import React from 'react';

const FileStructure= ({files})=>{
const[ displayVal,setDisplay ]=React.useState(false);
    if(files?.items?.length){

        return (<div>
                <span className={'onHover'} style={{color:'red'}}onClick={()=>setDisplay(!displayVal)}>{files.fileName}</span>
                {displayVal && <div style={{paddingLeft:'100px'}}>
                {files.items?.map((folder)=>{ return <FileStructure key={folder.fileName} files={folder}/>})}
                </div>}
        </div>);
    }
else
    return(<div>{files.fileName}</div>)


}
export default FileStructure;
