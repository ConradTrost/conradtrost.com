import React from 'react'

export default function InquiryForm() {

    const handleSubmit = (e) => {
    e.preventDefault()
    let myForm = document.getElementById('ContactForm');
    let formData = new FormData(myForm)
    fetch('/', {
        method: 'POST',
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
    }).then(() => console.log('Form successfully submitted')).catch((error) =>
        alert(error))
    }

    return (
        <div className="flex sm:p-10 mt-10 sm:m-0">
            <div className="w-10/12 sm:w-6/12 m-auto">
                <h1 className="my-4 sm:my-0">Fill out this form to contact me</h1>
                <form className="w-full" id="ContactForm" method="post" netlify-honeypot="bot-field" data-netlify="true" name="inquiry" onSubmit={((e) => handleSubmit)} >
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="inquiry" />

                    <input className="w-full p-4 border border-black-600 rounded sm:my-4" type="text" name="name" placeholder="John Doe" />

                    <input className="w-full p-4 border border-gray rounded my-4" type="email" name="email" placeholder="johndoe@gmail.com" />

                    <select defaultValue="selected" className="w-full bg-transparent p-4 border border-gray rounded my-4">
                        <option selected="selected">Select Your Reason for Contacting...</option>
                        <option value="develop">Website Development</option>
                        <option value="collaborate">Invitation to Collaborate</option>
                        <option value="contract">Freelance Work</option>
                        <option value="job">Job Opening</option>
                    </select>


                    <input className="w-full p-4 border border-gray rounded my-4" type="text" name="message" placeholder="Enter your inquiry here..." />

                    <input type="submit" name="submit" className="button w-full my-4" />

                </form>
            </div>
        </div>
    )
}
