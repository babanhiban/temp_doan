import React from 'react';
import { Head, useForm } from '@inertiajs/react';
 // vẫn giữ nếu bro cần override thêm

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('login'));
    };

    return (
        <>
            <Head title="Đăng Nhập" />

            {/* Header */}
            <header className="flex justify-between items-center px-8 py-4 bg-[#b5e8f7] border-b border-[#a0d0e0]">
                <nav className="flex space-x-4">
                    <a href="#" className="text-gray-800 text-base nav-item active">Màn Hình</a>
                    <a href="#" className="text-gray-800 text-base nav-item">Đăng Nhập</a>
                </nav>
                <div className="logo-container">
                    <img src="/images/manhinhdangnhap/logo.png" alt="Logo" className="h-10 w-auto" />
                </div>
            </header>

            {/* Main Content */}
            <div className="max-w-6xl mx-auto my-12 flex justify-center items-center px-4">
                {/* Image */}
                <div className="w-1/2 p-4 hidden md:block">
                    <img
                        src="/images/manhinhdangnhap/logo.png"
                        alt="Logo"
                        className="w-full border-2 border-[#3083a7] rounded"
                    />
                </div>

                {/* Form */}
                <div className="w-full md:w-1/2 p-8 bg-white shadow-md rounded-md">
                    <h2 className="text-2xl font-semibold mb-6 text-gray-800">Đăng Nhập</h2>

                    {status && <div className="mb-4 text-green-600">{status}</div>}

                    <form onSubmit={submit} className="space-y-5">
                        <div>
                            <input
                                type="email"
                                className="form-control w-full border border-gray-300 px-4 py-3 rounded text-base"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                placeholder="Nhập email"
                                required
                            />
                            {errors.email && (
                                <div className="text-sm text-red-600 mt-1">{errors.email}</div>
                            )}
                        </div>

                        <div>
                            <input
                                type="password"
                                className="form-control w-full border border-gray-300 px-4 py-3 rounded text-base"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                placeholder="Nhập mật khẩu"
                                required
                            />
                            {errors.password && (
                                <div className="text-sm text-red-600 mt-1">{errors.password}</div>
                            )}
                        </div>
                            
                        <button
                            type="submit"
                            className="btn-login w-full bg-[#45c6f3] text-white py-3 rounded text-base font-medium hover:bg-[#3095be] transition"
                            disabled={processing}
                        >
                            Đăng nhập
                        </button>
                    </form>

                    {canResetPassword && (
                        <a
                            href={route('password.request')}
                            className="block text-center mt-4 text-sm text-gray-700 hover:underline"
                        >
                            Quên mật khẩu?
                        </a>
                    )}

                    <div className="flex items-center my-6">
                        <div className="flex-grow border-t border-gray-300" />
                        <span className="mx-4 text-gray-500">Hoặc</span>
                        <div className="flex-grow border-t border-gray-300" />
                    </div>

                    <div className="text-center text-sm">
                        Bạn chưa có tài khoản?{' '}
                        <a href={route('register')} className="text-[#3083a7] hover:underline">
                            Đăng Ký
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
