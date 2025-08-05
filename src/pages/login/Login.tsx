import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Lock, Facebook, CircleUserRound } from "lucide-react";
import InputWithIcon from "@/components/form/InputWithIcon";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-background">
      <Card className="w-full max-w-md p-6">
        <CardContent className="space-y-6">
          {/* Title */}
          <div className="text-center">
            <CircleUserRound className="mx-auto w-10 h-10 text-gray-500" />
            <h1 className="text-2xl font-bold mt-2">Login</h1>
          </div>

          {/* Input fields */}
          <div className="space-y-4">
            {/* Email Field */}
            <InputWithIcon
              id="email"
              label="Email"
              type="email"
              placeholder="you@example.com"
              icon={Mail}
            />

            <InputWithIcon
              id="password"
              label="Password"
              type="password"
              placeholder="••••••••"
              icon={Lock}
            />

            {/* Login Button */}
            <Button className="w-full">Login</Button>
          </div>

          {/* Separator */}
          <div className="flex items-center gap-4">
            <div className="h-px bg-gray-300 flex-1" />
            <span className="text-xs text-gray-500">or continue with</span>
            <div className="h-px bg-gray-300 flex-1" />
          </div>

          {/* Social Buttons */}
          <div className="flex justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2">
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5"
              />
              Google
            </Button>
            <Button variant="outline" className="flex items-center gap-2">
              <Facebook className="w-5 h-5 text-blue-600" />
              Facebook
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
