
import React, { useState } from "react";
import "./SignupForm.css";

const SignupForm = ({ onSwitch }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Connect your registration API here.
        console.log("Signup form submitted");
    };

    return (
        <div className="signup-form">

            <div className="auth-icon">
                <span>✦</span>
            </div>

            <span className="auth-eyebrow">
                BEGIN YOUR JOURNEY
            </span>

            <h2>Create your account</h2>

            <p className="auth-description">
                Join MCT-SPACE and discover a universe
                of possibilities.
            </p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="signup-name">
                        Full Name
                    </label>

                    <input
                        id="signup-name"
                        type="text"
                        placeholder="Enter your full name"
                        autoComplete="name"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="signup-email">
                        Email Address
                    </label>

                    <input
                        id="signup-email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="signup-password">
                        Create Password
                    </label>

                    <div className="password-wrapper">
                        <input
                            id="signup-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Minimum 8 characters"
                            minLength={8}
                            autoComplete="new-password"
                            required
                        />

                        <button
                            type="button"
                            className="password-toggle"
                            onClick={() =>
                                setShowPassword(!showPassword)
                            }
                        >
                            {showPassword ? "Hide" : "Show"}
                        </button>
                    </div>
                </div>

                <label className="terms-label">
                    <input type="checkbox" required />

                    <span>
                        I agree to the Terms of Service and
                        Privacy Policy.
                    </span>
                </label>

                <button type="submit" className="auth-submit">
                    Create account <span>→</span>
                </button>

            </form>

            <div className="auth-switch">
                Already have an account?

                <button type="button" onClick={onSwitch}>
                    Sign in
                </button>
            </div>

            <div className="auth-footer">
                YOUR JOURNEY STARTS HERE.
            </div>

        </div>
    );
};

export default SignupForm;
