import React, { useState } from 'react';
import './Support.css';
import { ChevronDown, ChevronUp } from 'lucide-react';

interface FAQ {
    question: string;
    answer: string;
}

const FAQS: FAQ[] = [
    {
        question: "What is a Murrah buffalo and how can I identify it?",
        answer: `The Murrah buffalo is one of the best dairy buffalo breeds in India, well known for its high milk yield, strong genetics, and adaptability to different climatic conditions.

Identification features of Murrah buffalo:
• Jet-black skin color
• Short, tightly curved horns (spiral shape)
• Broad head with a prominent forehead
• Well-developed udder
• Strong and compact body structure
• High milk-producing capacity`
    },
    {
        question: "How can I identify a female Murrah buffalo in India?",
        answer: `A female Murrah buffalo can be identified using the following characteristics:
• Deep black skin without patches
• Medium to large body size
• Small, thick, and tightly curved horns
• Well-shaped udder with evenly placed teats
• Calm temperament and good feeding response
• High milk yield potential

All female Murrah buffaloes provided through Animal Kart are carefully selected and verified by experts.`
    },
    {
        question: "After purchasing, how does delivery work and why is there a 6-month gap for the next buffalo unit?",
        answer: `When you purchase 1 unit, you receive:
• 2 Murrah buffaloes
• 2 calves

Delivery cycle explanation:
• 1 Murrah buffalo + 1 calf will be transported to the farm within 1 month
• The remaining 2 Murrah buffaloes + 2 calves will be imported and delivered within 6 months

This structured cycle ensures:
• Continuous monthly revenue
• Proper quarantine and health monitoring
• Reduced operational risk
• Better long-term profitability

This delivery cycle is designed to maximize income stability and lead to higher overall profit.`
    },
    {
        question: "Why is CPF (Cattle Protection Fund) mandatory?",
        answer: `CPF is mandatory to ensure complete protection and long-term security of your livestock investment.

CPF benefits include:
• Full medical care in case of any health issues
• Replacement of buffalo in case of critical loss
• Artificial insemination support to ensure the birth of female Murrah calves only
• Continuous health monitoring
• Live CCTV access to monitor your buffaloes in real time

CPF safeguards your asset and ensures uninterrupted income generation.`
    },
    {
        question: "Why do I need to purchase at least 1 unit?",
        answer: `1 unit = 2 Murrah buffaloes + 2 calves

Purchasing 1 full unit is mandatory because:
• It ensures higher and more stable income generation
• It enables better milk production cycles
• It allows eligibility for CPF benefits
• It provides long-term profit scalability

Purchasing only 1 buffalo + 1 calf does not generate sufficient income or profit and is therefore not supported.`
    }
];

const FAQItem: React.FC<{ item: FAQ }> = ({ item }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className={`faq-item ${isOpen ? 'open' : ''}`} onClick={() => setIsOpen(!isOpen)}>
            <div className="faq-question">
                <span>{item.question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
            <div className={`faq-answer ${isOpen ? 'show' : ''}`}>
                <p>{item.answer}</p>
            </div>
        </div>
    );
};

const Support: React.FC = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Support form submitted:', formData);
        alert('Thank you for contacting support! We will get back to you shortly.');
        // Reset form
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: ''
        });
    };

    return (
        <div className="support-container">
            <div className="support-header">
                <h1>Contact Support</h1>
                <p>We are here to help. Check our FAQs or fill out the form below.</p>
            </div>

            <div className="faq-section">
                <h2>Frequently Asked Questions</h2>
                <div className="faq-list">
                    {FAQS.map((faq, index) => (
                        <FAQItem key={index} item={faq} />
                    ))}
                </div>
            </div>

            <div className="support-form-card">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-col">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    className="form-control"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                        <div className="form-col">
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    className="form-control"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="form-control"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="phone">Phone Number</label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="form-control"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">How can we help you?</label>
                        <textarea
                            id="message"
                            name="message"
                            className="form-control"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Describe your issue or question..."
                            required
                        ></textarea>
                    </div>

                    <button type="submit" className="submit-btn">Send Message</button>
                </form>
            </div>
        </div>
    );
};

export default Support;
