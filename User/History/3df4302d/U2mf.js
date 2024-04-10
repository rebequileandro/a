export function validate(input) {
    let errors = {}
    !input.country && (errors.country = '"Country" is required')
    !input.name && (errors.name = '"Activity" is required') 
    !input.difficulty && (errors.difficulty = '"Difficulty" is required')
    !input.duration && (errors.duration = '"Duration" is required')
    !input.season && (errors.season = '"Season" is required')
    if(/^([0-9])*$/.test(input.name)) {
        errors.name = 'Numbers are not allowed'
    }
    return errors
}