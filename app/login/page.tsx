'use client';
import { signIn } from 'next-auth/react';
import React, { useState } from 'react'

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSignIn = async (e: React.FormEvent) => {
        e.preventDefault();
        const res = await signIn('credentials', {
            redirect: false,
            email,
            password,
        });
       alert(res?.status)
        if (res?.error) {
            setError(res.error);
        }
    };

    return (

            <div className="w-full max-w-md bg-red rounded-lg shadow-md p-8">
                <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
                <form onSubmit={handleSignIn}>
                    <div className="mb-4">
                        <label className="block text-gray-700">Email</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}

                            className={`w-full px-4 py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 `}
                        />

                    </div>

                    <div className="mb-6">
                        <label className="block text-gray-700">Password</label>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}

                            className={`w-full px-4 py-2 mt-2 border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-400 $`}
                        />

                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400"
                    >
                        Login
                    </button>
                </form>

                {error && <p>{error}</p>}

            </div>
    )
}

export default Login
