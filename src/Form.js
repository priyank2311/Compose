import React from 'react';

function Form() {
    return (
        <div>
            <div className='container'>
                <form>
                    <div className='singleItem'>
                        <label htmlFor='name'>From</label>
                        <input type='text' name='name' className='to' placeholder='Email Id' />
                    </div>

                    <div className='singleItem'>
                        <label htmlFor='name'>To</label>
                        <input type='text' name='name' className='to' placeholder='Email Id' />
                    </div>

                    <div className='singleItem'>
                        <label htmlFor='name'>Subject</label>
                        <input type='text' name='subject' className='subject' placeholder='Details' />
                    </div>

                    <div className='textArea singleItem'>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message' cols='30' rows='5' placeholder='Type Message'></textarea>
                    </div>

                    <div className='btn'>
                        <button className='btns' type='submit'>Send</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Form;




