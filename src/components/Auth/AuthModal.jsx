
import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";

import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";

import "./AuthModal.css";

const AuthModal = ({ isOpen, onClose, initialMode = "login" }) => {

    const [mode, setMode] = useState(initialMode);

    useEffect(() => {
        if (isOpen) {
            setMode(initialMode);
        }
    }, [isOpen, initialMode]);

    useEffect(() => {
        if (!isOpen) return;

        const handleEscape = (event) => {
            if (event.key === "Escape") {
                onClose();
            }
        };

        document.addEventListener("keydown", handleEscape);

        // Prevent background scrolling
        document.body.style.overflow = "hidden";

        return () => {
            document.removeEventListener("keydown", handleEscape);
            document.body.style.overflow = "";
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    const switchMode = () => {
        setMode((current) =>
            current === "login" ? "signup" : "login"
        );
    };

    return createPortal(
        <div
            className="auth-modal-overlay"
            onMouseDown={(event) => {
                if (event.target === event.currentTarget) {
                    onClose();
                }
            }}
        >
            <div
                className="auth-modal-container"
                role="dialog"
                aria-modal="true"
                aria-label={mode === "login" ? "Sign in" : "Create account"}
            >
                <button
                    className="auth-modal-close"
                    onClick={onClose}
                    aria-label="Close authentication"
                >
                    &times;
                </button>

                <div className="auth-modal-content">

                    {mode === "login" ? (
                        <LoginForm onSwitch={switchMode} />
                    ) : (
                        <SignupForm onSwitch={switchMode} />
                    )}

                </div>
            </div>
        </div>,

        document.body
    );
};

export default AuthModal;
