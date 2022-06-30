import logo from "../../public/img/logo_dog.png";

const Header = () => {
  return (
    <div className="flex p-5 justify-between">
      <div>
        <h1 className="font-black text-xl">Daily UI Todo List</h1>
        <p className="text-gray-400 font-bold text-xs">
          Practice Design Everyday
        </p>
      </div>
      <img
        src={logo}
        className="rounded-full w-12 h-12 object-contain shadow-md bg-purple-300"
      />
    </div>
  );
};

export default Header;
