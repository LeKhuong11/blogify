import AuthenticatedSessionController from '@/actions/App/Http/Controllers/Auth/AuthenticatedSessionController';
import InputError from '@/components/input-error';
import TextLink from '@/components/text-link';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { register } from '@/routes';
import { request } from '@/routes/password';
import { Form, Head } from '@inertiajs/react';
import { LoaderCircle } from 'lucide-react';

interface LoginProps {
    status?: string;
    canResetPassword: boolean;
}

export default function Login({ status, canResetPassword }: LoginProps) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 transition-colors duration-300 px-4">
      <Head title="Đăng nhập" />

      <div className="w-full max-w-md bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-8 space-y-6 transform transition-all duration-300 hover:shadow-xl">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
            Chào mừng trở lại 👋
          </h1>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Đăng nhập để tiếp tục đến blog của bạn
          </p>
        </div>

        <Form
          {...AuthenticatedSessionController.store.form()}
          resetOnSuccess={["password"]}
          className="flex flex-col gap-6"
        >
          {({ processing, errors }) => (
            <>
              {/* Email */}
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  name="email"
                  required
                  autoFocus
                  autoComplete="email"
                  placeholder="you@example.com"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
                <InputError message={errors.email} />
              </div>

              {/* Password */}
              <div className="grid gap-2">
                <div className="flex justify-between items-center">
                  <Label htmlFor="password">Mật khẩu</Label>
                  {canResetPassword && (
                    <TextLink
                      href={request()}
                      className="text-sm"
                    >
                      Quên mật khẩu?
                    </TextLink>
                  )}
                </div>
                <Input
                  id="password"
                  type="password"
                  name="password"
                  required
                  autoComplete="current-password"
                  placeholder="••••••••"
                  className="dark:bg-gray-700 dark:border-gray-600"
                />
                <InputError message={errors.password} />
              </div>

              {/* Remember me */}
              <div className="flex items-center space-x-3">
                <Checkbox id="remember" name="remember" className='dark:bg-gray-700 dark:border-gray-600' />
                <Label htmlFor="remember">Ghi nhớ đăng nhập</Label>
              </div>

              {/* Submit */}
              <Button
                type="submit"
                disabled={processing}
                className="mt-4 w-full py-2 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-400 transition"
              >
                {processing ? (
                  <LoaderCircle className="h-4 w-4 animate-spin" />
                ) : (
                  "Đăng nhập"
                )}
              </Button>

              {/* Register link */}
              <div className="text-center text-sm text-gray-600 dark:text-gray-400">
                Chưa có tài khoản?{" "}
                <TextLink href={register()}>Đăng ký ngay</TextLink>
              </div>
            </>
          )}
        </Form>

        {status && (
          <div className="text-center text-green-600 dark:text-green-400 text-sm font-medium">
            {status}
          </div>
        )}
      </div>
    </div>
  );
}