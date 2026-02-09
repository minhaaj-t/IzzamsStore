import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import './WhatsAppFAB.css';

const contacts = [
    {
        name: 'Mubashirul Izzam',
        phone: '+91 7594015016',
        avatar: 'https://i.pravatar.cc/150?img=11'
    },
    {
        name: 'Your Pickles Team',
        phone: '+91 884 882 3269',
        avatar: '/images/logos/your-pickles.png'
    }
];

const WhatsAppFAB = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedContact, setSelectedContact] = useState(null);
    const [message, setMessage] = useState('');

    const handleContactSelect = (contact) => {
        setSelectedContact(contact);
    };

    const handleBackToContacts = () => {
        setSelectedContact(null);
        setMessage('');
    };

    const handleSendMessage = () => {
        if (!message.trim() || !selectedContact) return;

        const phoneNumber = selectedContact.phone.replace(/[\s+]/g, '');
        window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
        setMessage('');
        setSelectedContact(null);
        setIsOpen(false);
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    };

    const handleClose = () => {
        setIsOpen(false);
        setSelectedContact(null);
        setMessage('');
    };

    return (
        <div className="whatsapp-fab-container">
            {/* WhatsApp Chat Popup */}
            {isOpen && (
                <div className="whatsapp-popup">
                    {/* Header */}
                    <div className="wa-header">
                        {selectedContact ? (
                            <>
                                <button className="wa-back-btn" onClick={handleBackToContacts}>
                                    <svg viewBox="0 0 24 24" width="24" height="24" fill="currentColor">
                                        <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
                                    </svg>
                                </button>
                                <img src={selectedContact.avatar} alt="" className="wa-header-avatar" />
                                <div className="wa-header-info">
                                    <span className="wa-header-name">{selectedContact.name}</span>
                                    <span className="wa-header-status">online</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="wa-header-icon">
                                    <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div className="wa-header-info">
                                    <span className="wa-header-name">IZZAM'S STORE</span>
                                    <span className="wa-header-status">Chat with us</span>
                                </div>
                            </>
                        )}
                        <button className="wa-close-btn" onClick={handleClose}>
                            <X size={20} />
                        </button>
                    </div>

                    {/* Content */}
                    <div className="wa-content">
                        {selectedContact ? (
                            /* Chat View */
                            <div className="wa-chat-view">
                                <div className="wa-messages">
                                    <div className="wa-message-bubble">
                                        <p>Hello! 👋</p>
                                        <p>Welcome to IZZAM'S STORE. How can we help you today?</p>
                                        <span className="wa-message-time">
                                            {new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    </div>
                                </div>
                                <div className="wa-input-area">
                                    <input
                                        type="text"
                                        placeholder="Type a message..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onKeyPress={handleKeyPress}
                                        autoFocus
                                    />
                                    <button
                                        className="wa-send-btn"
                                        onClick={handleSendMessage}
                                        disabled={!message.trim()}
                                    >
                                        <Send size={20} />
                                    </button>
                                </div>
                            </div>
                        ) : (
                            /* Contacts List */
                            <div className="wa-contacts-list">
                                <p className="wa-contacts-intro">
                                    Start a conversation with our team. Click on a contact below.
                                </p>
                                {contacts.map((contact, index) => (
                                    <div
                                        key={index}
                                        className="wa-contact-item"
                                        onClick={() => handleContactSelect(contact)}
                                    >
                                        <img src={contact.avatar} alt="" className="wa-contact-avatar" />
                                        <div className="wa-contact-info">
                                            <span className="wa-contact-name">{contact.name}</span>
                                            <span className="wa-contact-phone">{contact.phone}</span>
                                        </div>
                                        <div className="wa-contact-arrow">
                                            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor">
                                                <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z" />
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* FAB Button */}
            <button
                className={`main-fab ${isOpen ? 'active' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Contact Us on WhatsApp"
            >
                {isOpen ? (
                    <X size={28} />
                ) : (
                    <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                )}
            </button>
        </div>
    );
};

export default WhatsAppFAB;
