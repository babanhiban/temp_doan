import React, { useState } from 'react';
import { useForm } from '@inertiajs/react';

export default function ResetPassword({ canLogin, canRegister, email }) {
    const { data, setData, post, processing, errors } = useForm({
        email: email || '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('password.update'));
    };

    return (
        <div className="min-h-screen bg-[#f0f9fb] font-['Roboto']">
            <header className="header">
                <div className="nav">
                    <a href="#" className="nav-item active">Màn Hình</a>
                    <span className="nav-label">Nhập Mật Khẩu Mới</span>
                </div>
                <div className="logo-container">
                    <img src="/images/manhinhdangnhap/logo.png" alt="Logo" className="logo-header" />
                </div>
            </header>

            <div className="container">
                <div className="left-image">
                    <img src="/images/manhinhdangnhap/logo.png" alt="Logo" />
                </div>
                <div className="form-area">
                    <h2>Tạo mật khẩu mới</h2>
                    <form onSubmit={submit}>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password"
                                value={data.password}
                                onChange={(e) => setData('password', e.target.value)}
                                className="form-control"
                                placeholder="Nhập mật khẩu mới"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <input
                                type="password"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) => setData('password_confirmation', e.target.value)}
                                className="form-control"
                                placeholder="Xác nhận lại mật khẩu"
                                required
                            />
                        </div>
                        <button type="submit" className="btn-submit" disabled={processing}>
                            Đặt lại mật khẩu
                        </button>
                    </form>
                    <div className="divider"><span>Hoặc</span></div>
                    <div className="links">
                        <p>Bạn chưa có tài khoản? <a href={canRegister}>Đăng ký</a></p>
                        <p>Bạn đã có tài khoản? <a href={canLogin}>Đăng nhập</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}
