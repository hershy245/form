import React from 'react'

function Form(props) {
    return (
        <div>
            <input className='text'
                name='firstName'
                placeholder='First name'
                value={props.value}
                onChange={props.handle}
            />
            <br />
            <input className='text'
                name='lastName'
                placeholder='Last name'
                value={props.value}
                onChange={props.handle}
            /> <br />
            <input
                name='age' className='text'
                placeholder='Age'
                value={props.value}
                onChange={props.handle}
            /> <br />
            <br />
            <input
                type='radio'
                name='gender'
                value='male'
                checked={props.gender === 'Male'}
                onChange={props.handle}
            /> Male
            <br />
            < input
                type='radio'
                name='gender'
                value='female'
                checked={props.gender === 'female'}
                onChange={props.handle}
            /> Female
            <br />
            <br />
            <select
                name=' destination'
                value={props.value}
                onChange={props.handle}>
                <option value=''>pleas select your destination</option>
                <option value='montreal'>montreal</option>
                <option value='london'>london</option>
                <option value='israel'>israel</option>
            </select>
            <br />
            <br />
            <br />
            <input
                type='checkbox'
                name='isBread'
                checked={props.isBread}
                onChange={props.handle}
            />Is bread
            <br />
            <input
                type='checkbox'
                name='isMilk'
                checked={props.isMilk}
                onChange={props.handle}
            />Is milk
            <br />
            <input
                type='checkbox'
                name='isNuts'
                checked={props.isNuts}
                onChange={props.handle}
            />Is nuts
            <br />
            <br />
            <button>submit</button>
            <div className="entered-info">
                <h2  >Entered information</h2>
                <p>your name:{props.firstName} {props.lastName}</p>
                <p>your age:{props.age}</p>
                <p>your gender:{props.gender}</p>
                <p>your destination{props.destination}:</p>
                <p>your dietary restrictions:</p>
               
                    <p>is bread ?{props.isBread ? 'yes' : 'no'}</p>
                    <p>is milk ?{props.isMilk ? 'yes' : 'no'}</p>
                    <p>is nuts ?{props.isNuts ? 'yes' : 'no'}</p>
               
            </div>

        </div>
    )
}

export default Form