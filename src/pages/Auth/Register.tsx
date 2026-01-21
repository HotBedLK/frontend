import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/auth.store";
import Input from "../../components/ui/Input/Input";
import Button from "../../components/ui/Button/Button";

const VALID_PREFIXES = ["070", "071", "075", "077"];

export default function Register() {
  const register = useAuthStore((s) => s.register);
  const isLoading = useAuthStore((s) => s.isLoading);
  const apiError = useAuthStore((s) => s.error);

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const validate = () => {
    const newErrors: Record<string, string> = {};

    // First Name
    if (!fName.trim()) {
      newErrors.fName = "First name is required";
    }

    // Last Name
    if (!lName.trim()) {
      newErrors.lName = "Last name is required";
    }

    // Phone Number
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits";
    } else if (!VALID_PREFIXES.includes(phone.substring(0, 3))) {
      newErrors.phone = "Invalid mobile provider.";
    }

    // Email (optional)
    if (email.trim()) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        newErrors.email = "Invalid email address";
      }
    }

    // Password
    if (!password) {
      newErrors.password = "Password is required";
    }

    // Confirm Password
    if (!confirmPassword) {
      newErrors.confirmPassword = "Confirm password is required";
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    const success = await register({
      first_name: fName,
      last_name: lName,
      password: password,
      mobile_number: phone,
      email: email,
    });

    if (success) navigate(from, { replace: true });
  };

  return (
    <>
      {/* Header */}
      <div className="mb-6 mt-4 text-center">
        <h1 className="font-display text-3xl font-bold text-gray-900">
          Create Account
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Create an account or login with hotbed.lk
        </p>
      </div>

      {/* Form */}
      <form className="w-full max-w-lg space-y-4" onSubmit={handleSubmit}>
        {/* First Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            First Name
          </label>
          <Input
            type="text"
            value={fName}
            onChange={(e) => setFName(e.target.value)}
            error={errors.fName}
          />
        </div>

        {/* Last Name */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Last Name
          </label>
          <Input
            type="text"
            value={lName}
            onChange={(e) => setLName(e.target.value)}
            error={errors.lName}
          />
        </div>

        {/* Phone */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Phone Number
          </label>
          <Input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            error={errors.phone}
          />
        </div>

        {/* Email */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">E-Mail</label>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={errors.email}
          />
        </div>

        {/* Password */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Password
          </label>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={errors.password}
          />
        </div>

        {/* Confirm Password */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-gray-500">
            Confirm Password
          </label>
          <Input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />
        </div>

        <Button loading={isLoading}>Register</Button>

        {apiError && (
          <p className="text-center text-xs text-red-600">{apiError}</p>
        )}

        {/* Footer */}
        <div className="mt-6 space-y-2">
          <p className="text-center text-xs text-gray-500">
            Have account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-600 hover:underline"
            >
              login here
            </Link>
          </p>
          <p className="text-center text-xs text-gray-400">
            Terms of use | Privacy policy
          </p>
        </div>
      </form>
    </>
  );
}
