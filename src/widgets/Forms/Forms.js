import React from 'react';

const FromFields = (props) => {

    const renderFields =() => {
        const fromArray = [];
        //  crea un nuovo array   
        for(let elementName in props.formData){
            fromArray.push({  //per ogni elemento che passa lo manda nell'array
                id:elementName,
                settings: props.formData[elementName]
            })
        }

        return fromArray.map( (item,i) => {   //passa ogni elemento dell array a render
            return(
                <div key={i} className="form_element">
                    {renderTemplates(item)}
                </div>
            )
        })
    }

    const showLabel = (show,label) => {
        return show ?
            <label>{label}</label>
        : null
    }

    const changeHandler = (event,id,blur) => { //crea nuovo stato con le info inserite nei form 
        const newState = props.formData;
        newState[id].value = event.target.value;  

        if(blur){
            let validData = validate(newState[id])
            newState[id].valid = validData[0];
            newState[id].validationMessage = validData[1];

        }

newState[id].touched = true;
        
       

        props.change(newState)
    }

    const validate = (element) => {
        console.log(element)
        let error = [true, '']

        if(element.validation.minLen){
            const valid = element.value.length >= element.validation.minLen;
            const message = `${ !valid ? 'Must be greater than '+ element.validation.minLen : ''}`
            error = !valid ?[valid,message]:error

        }

        if(element.validation.required){
            const valid = element.value.trim() !== '';
            const message = `${ !valid ? 'This field is required': ''}`

            error = !valid ?[valid,message]:error

        }

        return error;
    }

    const showValidation = (data) =>{
        let errorMessage = null;

        if(data.validation && !data.valid){
            errorMessage = (
                <div className="label_error">
                    {data.validationMessage}
                </div>
            )

        }
        return errorMessage;
    }


    const renderTemplates = (data) => {
        let formTemplate = '';
        let values = data.settings;

        switch(values.element){  //controlla il tipo dell' elemento
            case('input'):
            formTemplate = (  //ritorna questo template
                <div>
                    { showLabel(values.label,values.labelText) }
                    <input
                        {...values.config}
                        value={values.value}
                        onBlur={
                            (event) => changeHandler(event,data.id,true)
                        }
                        onChange={
                            (event) => changeHandler(event,data.id,false) // passa alla funzione i dati aggiornati
                        }
                    />
                    {showValidation(values)}
                </div>
            )
        break;
            case('textarea'):
            formTemplate = (
                <div>
                    { showLabel(values.label,values.labelText)}
                    <textarea
                    {...values.config} // piglia tutta la config e la mette in values
                    value={values.value}
                    onChange={
                            (event) => changeHandler(event,data.id) // passa alla funzione i dati aggiornati
                        }
                        >
                    </textarea>
                </div>
            )
            break;
                case('select'):
                    formTemplate = (
                        <div>
                            { showLabel(values.label,values.labelText)}
                            <select
                            value={values.value}
                            name={values.config.name}
                            onChange={
                                (event) => changeHandler(event,data.id) // passa alla funzione i dati aggiornati
                                }
                            >
                             {values.config.options.map((item,i) => (
                                 <option key={i} value={item.val}>
                                    {item.text}
                                 </option>
                             ))}

                            </select>
                        </div>


                    )
            break;
        default:
        formTemplate = null
        }
        return formTemplate;
    }

    return(
        <div>
            {renderFields()}
        </div>



    )
}

export default FromFields;