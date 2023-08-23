'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from "next/headers";
import { useState } from 'react';
import { toast } from 'react-toastify';

export default function ResetPage() {
    const supabase = createClientComponentClient()
    const [new_password, setNew_password] = useState('')

    async function changePassword(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        console.log("new_password", new_password)
        const updatep = await supabase.auth.updateUser({ password: new_password });
        console.log("updatep", updatep);
        if (updatep.error) {
            console.log("updatep.error", updatep.error.message);
            toast.error(updatep.error.message)
        } else {
            toast.success("Password changed");
        }
    }

    return (
        <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2 bg-slate-200" >

            <form onSubmit={changePassword} className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
                <h1>Change your Password</h1>
                <label htmlFor="new_password">New password</label>
                <input type="password" name="new_password" id="new_password" onChange={(e) => setNew_password(e.target.value)} className="rounded-md px-4 py-2 bg-inherit border mb-6" placeholder="••••••••" required />
                <button type="submit" className="bg-green-700 rounded px-4 py-2 text-white mb-6">
                    Change Password
                </button>
            </form>
        </div>
    )
}