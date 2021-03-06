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
        <div className="flex p-40">
            <div className="w-6/12 m-auto">
                <form className="w-full" id="form" method="post" netlify-honeypot="bot-field" data-netlify="true" name="inquiry" onSubmit={((e) => handleSubmit)} >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <input className="w-full p-4 border border-black-600 rounded m-4" type="text" name="name" placeholder="John Doe" />

                    <input className="w-full p-4 border border-gray rounded m-4" type="email" name="email" placeholder="johndoe@gmail.com" />

                    <select className="w-full p-4 border border-gray rounded m-4">
                        <option value="develop" selected>Website Development</option>
                        <option value="collaborate">Invitation to Collaborate</option>
                        <option value="contract">Freelance Work</option>
                        <option value="job">Job Opening</option>
                    </select>


                    <input className="w-full p-4 border border-gray rounded m-4" type="text" name="message" placeholder="Enter your inquiry here..." />

                    <input type="submit" name="submit" className="button w-full m-4" />

                </form>
            </div>
        </div>
    )
}
