import React from 'react'

export default function InquiryForm() {

    const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('pizzaOrder');
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
    }

    return (
        <div>
             <form className="w-6/12 m-auto flex " id="form" method="post" netlify-honeypot="bot-field" data-netlify="true" name="inquiry" onSubmit={((e) => handleSubmit)} >
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />

                <input className="w-5/12" type="email" name="email" placeholder="JohnDoe@mail.com" />

                <input className="w-5/12" type="text" name="name" placeholder="John Doe" />

                <select className="block">
                    <option value="develop">Website Development</option>
                    <option value="collaborate">Invitation to Collaborate</option>
                    <option value="contract">Freelance Work</option>
                    <option value="job">Job Opening</option>
                </select>


                <input className="block" type="text" name="message" placeholder="Enter your inquiry here..." />

                <input type="submit" name="submit" />

            </form>
        </div>
    )
}
