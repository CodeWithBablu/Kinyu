import LoginForm from '@/components/ui/login-form';

export default function LoginPage() {
  return (
    <main className="flex items-center justify-center h-screen w-full">
      <div className="relative mx-auto flex w-full h-full sm:h-fit justify-center sm:max-w-[500px] flex-col space-y-2.5 p-4 sm:-mt-32 bg-zinc-900/0 backdrop-blur-2xl rounded-xl">
        <div className="flex h-20 w-full items-end rounded-lg p-3 md:h-36">
          <div className="w-32 text-4xl font-caveat font-bold text-white md:w-36">
            Kinyu
          </div>
        </div>
        <LoginForm />

        <div className="absolute mix-blend-multiply left-0 top-0 z-0 h-60 w-60 rounded-full bg-gradient-radial from-pink-900/60 blur-3xl md:h-80 md:w-72"></div>
        <div className="absolute mix-blend-multiply bottom-0 right-0 z-0 h-60 w-60 rounded-full bg-gradient-radial from-teal-800/70 blur-3xl md:h-80 md:w-72"></div>
      </div>
    </main>
  );
}