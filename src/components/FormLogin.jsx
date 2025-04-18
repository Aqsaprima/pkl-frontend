function Login() {
  return (
    <>
      <form
        action=""
        method="post"
        className="bg-white rounded-lg text-black p-6 flex flex-col h-fit justify-center items-center gap-3 z-1"
      >
        <h2 className="text-2xl font-bold">Login Akun</h2>

        <div className="flex-col flex">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id=""
            className="border-2 rounded-lg w-64 h-10 px-2"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id=""
            className="border-2 rounded-lg w-64 h-10 px-2"
          />
        </div>

        <label
          htmlFor="submit"
          className="bg-[#FFCF45] rounded-md py-2 w-full text-center mt-4"
        >
          Login
        </label>
        <button type="submit" name="submit" className="hidden"></button>

        <p>
          Saya belum punya akun!{" "}
          <a href="/">
            <span className="font-bold">Daftar</span>
          </a>
        </p>
      </form>
    </>
  );
}
export default Login;
