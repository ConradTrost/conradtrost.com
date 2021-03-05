import React from 'react'

export default function InquiryForm() {
    return (
        <div>
             <form method="post" netlify-honeypot="bot-field" data-netlify="true" name="inquiry">
                <input type="hidden" name="bot-field" />
                <input type="hidden" name="form-name" value="contact" />
                
                <label>
                    Email
                    <input type="email" name="email" placeholder="JohnDoe@mail.com" />
                </label>

                <label>
                    Name
                    <input type="text" name="name" placeholder="John Doe" />
                </label>

                <label>
                    <select>
                        <option value="develop">Website Development</option>
                        <option value="collaborate">Invitation to Collaborate</option>
                        <option value="contract">Freelance Work</option>
                        <option value="job">Job Opening</option>
                    </select>
                </label>

                <label>
                    Message
                    <input type="text" name="message" placeholder="Enter your inquiry here..." />
                </label>

            </form>
        </div>
    )
}
