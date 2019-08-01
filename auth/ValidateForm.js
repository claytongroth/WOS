
export default function validateForm({name, area, notes}){
    let errors = {}
    if (typeof name !== "string"){
        errors.nameError = "Name must be a string."
    }
    if (!name){
        errors.noName = "Please enter a name."
    }
    if (typeof area !== "string"){
        errors.nameError = "Area must be a string."
    }
    if (!area){
        errors.noName = "Please enter an Area."
    }
    return errors
}