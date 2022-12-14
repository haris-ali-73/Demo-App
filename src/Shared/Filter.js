import {MultiSelect} from "react-multi-select-component";
import {useEffect, useState} from "react";

const Multi = ({name, options, func, nameid, objArr}) => {
  const [selected, setSelected] = useState([]);

  useEffect(() => {
    func({...objArr, [nameid]: selected.map(s => s.value)});

  }, [selected])

  return (
    <div>
      <h2>{name}</h2>
      <MultiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        labelledBy="Select"
      />
    </div>
  );
}

const InputFilter = ({setName, Name, title, func, objArr}) => {

  const handleInput = (e) => {
    if (e.key === 'Enter') {
      func({...objArr, "name": Name});
    } else {
      setName(e.target.value)
    }
  }

  return (
    <>
      <h3>{title}</h3>
      <input type="text" onKeyDown={handleInput}></input>
      <br/>
      <br/>
    </>
  );

}

// func is the setState function of the selected object
// objArr is the selected object itself
const Filter = ({list, func, objArr, title, setName, Name}) => {

  return(
    <div>
      {list.map((item) => {
          return (item.type === "select" ? <Multi name={item.name} options={item.options} nameid={item.key} func={func} objArr={objArr}/> : <></>)
        }
      )}
    </div>
  )

};
// <InputFilter title={title} setName={setName} Name={Name} func={func} objArr={objArr}/>
export default Filter;