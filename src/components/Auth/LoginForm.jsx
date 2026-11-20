
import React, { useState } from "react";
import "./LoginForm.css";

const LoginForm = ({ onSwitch }) => {

    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();

        // Connect your authentication API here.
        console.log("Login form submitted");
    };

    return (
        <div className="login-form">

            <div className="auth-icon">
                <span>✦</span>
            </div>

            <span className="auth-eyebrow">
                WELCOME BACK
            </span>

            <h2>Sign in to MCT-SPACE</h2>

            <p className="auth-description">
                Continue your journey beyond the boundaries
                of our world.
            </p>

            <form onSubmit={handleSubmit}>

                <div className="form-group">
                    <label htmlFor="login-email">
                        Email Address
                    </label>

                    <input
                        id="login-email"
                        type="email"
                        placeholder="you@example.com"
                        autoComplete="email"
                        required
                    />
                </div>

                <div className="form-group">
                    <div className="password-label">
                        <label htmlFor="login-password">
                            Password
                        </label>

                        <button
                            type="button"
                            className="forgot-password"
                            onClick={() => alert(
                                "Password recovery will be connected later."
                            )}
                        >
                            Forgot password?
                        </button>
                    </div>

                    <div className="password-wrapper">
                        <input
                            id="login-password"
                            type={showPassword ? "text" : "password"}
                            placeholder="Enter your password"
                            autoComplete="current-password"
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

                <button type="submit" className="auth-submit">
                    Sign in <span>→</span>
                </button>

            </form>

            <div className="auth-switch">
                Don't have an account?

                <button type="button" onClick={onSwitch}>
                    Create account
                </button>
            </div>

            <div className="auth-footer">
                EXPLORE BEYOND LIMITS.
            </div>

        </div>
    );
};

export default LoginForm;
