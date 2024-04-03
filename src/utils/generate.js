import { faker } from '@faker-js/faker'
import { states, departments } from '../data/const'
import { v4 as uuidv4 } from 'uuid'

export const generateEmployee = (isWithForm)=>{
    const employee = {
        id: uuidv4(),
        firstname:faker.person.firstName(),
        lastname:faker.person.lastName(),
        dateOfBirth:isWithForm?faker.date.birthdate():faker.date.birthdate().toISOString(),
        startDate:isWithForm?faker.date.past():faker.date.past().toISOString(),
        street:faker.location.street(),
        city:faker.location.city(),
        state:isWithForm?states[generateNumber(0,states.length-1)]:states[generateNumber(0,states.length-1)].abbreviation,
        zipCode:faker.location.zipCode(),
        department:departments[generateNumber(0,departments.length-1)]
        

    }
    return employee
}
export const generateNumber=(min,max)=>{
    return Math.floor(Math.random() * (max - min + 1)) + min

}