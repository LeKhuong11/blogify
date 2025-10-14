import { Head, Form } from "@inertiajs/react";
import { LoaderCircle } from "lucide-react";
import RegisteredUserController from "@/actions/App/Http/Controllers/Auth/RegisteredUserController";
import { login } from "@/routes";

import InputError from "@/components/input-error";
import TextLink from "@/components/text-link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Register() {
    return (
        <>
            <Head title="Register" />
            <div className="flex min-h-screen items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
                <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 animate-fadeIn">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
                            Create an account
                        </h1>
                        <p className="text-gray-500 dark:text-gray-400 mt-1">
                            Enter your details below to sign up
                        </p>
                    </div>

                    {/* Form */}
                    <Form
                        {...RegisteredUserController.store.form()}
                        resetOnSuccess={["password", "password_confirmation"]}
                        disableWhileProcessing
                        className="space-y-6"
                    >
                        {({ processing, errors }) => (
                            <>
                                {/* Full name */}
                                <div>
                                    <Label htmlFor="name">Full name</Label>
                                    <Input
                                        id="name"
                                        type="text"
                                        name="name"
                                        placeholder="Your full name"
                                        required
                                        autoFocus
                                        autoComplete="name"
                                        tabIndex={1}
                                        className="dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <InputError message={errors.name} className="mt-1" />
                                </div>

                                {/* Email */}
                                <div>
                                    <Label htmlFor="email">Email address</Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        name="email"
                                        placeholder="email@example.com"
                                        required
                                        autoComplete="email"
                                        tabIndex={2}
                                        className="dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <InputError message={errors.email} className="mt-1" />
                                </div>

                                {/* Password */}
                                <div>
                                    <Label htmlFor="password">Password</Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        name="password"
                                        placeholder="********"
                                        required
                                        autoComplete="new-password"
                                        tabIndex={3}
                                        className="dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <InputError message={errors.password} className="mt-1" />
                                </div>

                                {/* Confirm password */}
                                <div>
                                    <Label htmlFor="password_confirmation">
                                        Confirm password
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        name="password_confirmation"
                                        placeholder="********"
                                        required
                                        autoComplete="new-password"
                                        tabIndex={4}
                                        className="dark:bg-gray-700 dark:border-gray-600"
                                    />
                                    <InputError
                                        message={errors.password_confirmation}
                                        className="mt-1"
                                    />
                                </div>

                                {/* Submit button */}
                                <Button
                                    type="submit"
                                    className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
                                    disabled={processing}
                                    tabIndex={5}
                                >
                                    {processing && (
                                        <LoaderCircle className="mr-2 h-4 w-4 animate-spin" />
                                    )}
                                    Create account
                                </Button>

                                {/* Footer */}
                                <p className="text-center text-sm text-gray-500 dark:text-gray-400 mt-6">
                                    Already have an account?{" "}
                                    <TextLink href={login()} tabIndex={6}>
                                        Log in
                                    </TextLink>
                                </p>
                            </>
                        )}
                    </Form>
                </div>
            </div>
        </>
    );
}
