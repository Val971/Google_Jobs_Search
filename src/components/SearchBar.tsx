import { Input } from "antd";

export default interface SearchBarProps {
  handleSearch: (querry: string) => void;
}
export const SearchBar = ({ handleSearch }: SearchBarProps) => {
  const search = (value: string) => {
    handleSearch(value);
  };
  return (
    <div className="bg-[url('../../src/assets/backgroundImg.png')] flex bg-no-repeat bg-cover bg-center rounded-lg w-auto">
      <div className="py-10 px-5 w-full">
        <Input
          onChange={(e) => search(e.target.value)}
          placeholder="input search text"
          allowClear
        />
      </div>
    </div>
  );
};
