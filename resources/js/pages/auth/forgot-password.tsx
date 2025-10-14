// Components
import PasswordResetLinkController from '@/actions/App/Http/Controllers/Auth/PasswordResetLinkController';
import { login } from '@/routes';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export default function ForgotPassword({ status }: { status?: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 px-4 transition-colors duration-300">
      <Head title="Quên mật khẩu" />

      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 transform transition-all duration-300 hover:shadow-xl">
        <div className="text-center space-y-1">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white">
            Quên mật khẩu 🔑
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Nhập email của bạn để nhận liên kết đặt lại mật khẩu
          </p>
        </div>

        {status && (
          <div className="text-center text-sm font-medium text-green-600 dark:text-green-400">
            {status}
          </div>
        )}

        <Form {...PasswordResetLinkController.store.form()}>
          {({ processing, errors }) => (
            <div className="space-y-5">
              {/* Email field */}
              <div className="space-y-2">
                <Label htmlFor="email">Địa chỉ email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  autoFocus
                  autoComplete="off"
                  required
                  placeholder="you@example.com"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
                <InputError message={errors.email} />
              </div>

              {/* Submit button */}
              <Button
                type="submit"
                disabled={processing}
                className="w-full py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
                data-test="email-password-reset-link-button"
              >
                {processing ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  'Gửi liên kết đặt lại mật khẩu'
                )}
              </Button>

              {/* Back to login */}
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Hoặc quay lại{' '}
                <TextLink href={login()} className="text-indigo-600 dark:text-indigo-400">
                  đăng nhập
                </TextLink>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
