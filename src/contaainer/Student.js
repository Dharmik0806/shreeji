import React from 'react';

function Student(props) {

    const setValu = () => {
        console.log("okokok");
    }
    
    return (
        <div id='student'>

            <div className='student-container'>
                <input
                    type="text"
                    name="fname"
                    id='fname'
                    placeholder='Name'
                />

                <input
                    type="email"
                    name="email"
                    id='email'
                    placeholder='E-mail'
                />

                <div>Hobby :
                    <label for="singing">
                        <input type="checkbox" name="singing" value="singing" />Singing
                    </label>

                    <label for="cricket">
                        <input type="checkbox" name="cricket" value="cricket" />Cricket
                    </label>

                    <label for="reading">
                        <input type="checkbox" name="reading" value="reading" />Reading
                    </label>
                </div>

                <div>Zender :
                    <label for="male">
                        <input type="radio" id='male' value="male" name="zender" />Male
                    </label>

                    <label for="female">
                        <input type="radio" id='female' value="female" name="zender" />Female
                    </label>

                    <label for="other">
                        <input type="radio" id='other' value="other" name="zender" />Other
                    </label>
                </div>

                <div>
                    <input type="button" value="Submit" className='btn' onClick={setValu()}></input>
                </div>
            </div>

        </div>
    );
}

export default Student;