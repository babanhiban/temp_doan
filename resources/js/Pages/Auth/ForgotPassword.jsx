import React from 'react';
import { useForm } from '@inertiajs/react';

export default function ForgotPassword({ canLogin, canRegister }) {
    const { data, setData, post, processing, errors } = useForm({
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.email'));
    };

    return (
        <div className="min-h-screen bg-[#f0f9fb] font-['Roboto']">
            <header className="flex justify-between items-center px-8 py-4 bg-[#66d3f3] border-b border-[#5bbfe0]">
                <nav className="flex items-center space-x-4">
                    <a href="#" className="text-[#333] text-base">Màn Hình</a>
                    <a href="#" className="text-[#333] text-base font-medium border-r-2 border-red-600 pr-2">Quên Mật Khẩu</a>
                </nav>
                <div>
                    <img src="/images/manhinhdangnhap/logo.png" alt="Logo" className="h-10" />
                </div>
            </header>

            <div className="flex max-w-[1200px] mx-auto mt-12 items-center justify-center">
                <div className="w-[45%] p-5">
                    <img
                        src="/images/manhinhdangnhap/logo.png"
                        alt="Logo"
                        className="w-full border-2 border-[#3083a7] rounded"
                    />
                </div>
                <div className="w-[45%] px-10 py-5">
                    <h2 className="text-2xl mb-6 text-[#333]">Quên mật khẩu</h2>
                    <form onSubmit={submit}>
                        <div className="mb-5">
                            <input
                                type="email"
                                name="email"
                                value={data.email}
                                onChange={(e) => setData('email', e.target.value)}
                                className="w-full px-4 py-3 border border-gray-300 rounded text-base"
                                placeholder="Nhập email"
                                required
                            />
                            {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 bg-[#45c6f3] text-white font-medium text-base rounded hover:bg-[#3ab5e0] transition"
                            disabled={processing}
                        >
                            Lấy lại mật khẩu
                        </button>
                    </form>

                    <div className="flex items-center text-center my-6">
                        <div className="flex-1 border-b border-gray-300"></div>
                        <span className="px-4 text-gray-600">Hoặc</span>
                        <div className="flex-1 border-b border-gray-300"></div>
                    </div>

                    <div className="text-center mt-2 space-y-2">
                        {canRegister && (
                            <div>
                                <span>Bạn chưa có tài khoản? </span>
                                <a href={route('register')} className="text-[#3083a7] hover:underline">Đăng ký</a>
                            </div>
                        )}
                        {canLogin && (
                            <div>
                                <span>Bạn đã có tài khoản? </span>
                                <a href={route('login')} className="text-[#3083a7] hover:underline">Đăng nhập</a>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
