import { Checkbox, Input, Radio, Space } from "antd";
import { BiWorld } from "react-icons/bi";

export default interface SideBarProps {
  onChangeJobType: (value: string) => void;
  onSearchLocation: (value: string) => void;
  onChangeRadioLocation: (value: string) => void;
}

export const SideBar = ({
  onChangeJobType,
  onSearchLocation,
  onChangeRadioLocation,
}: SideBarProps) => {
  return (
    <div className="mb-6">
      <Checkbox
        value="fullTime"
        className="text-dark-blue text-base"
        onChange={(e) => onChangeJobType(e.target.value)}
      >
        Full time
      </Checkbox>
      <Checkbox
        value="contract"
        className="text-dark-blue text-base"
        onChange={(e) => onChangeJobType(e.target.value)}
      >
        Contract
      </Checkbox>
      <p className="text-light-gray uppercase text-sm font-bold mt-8 mb-4">
        Location
      </p>
      <Input
        className="h-12 mb-6"
        placeholder="City, state, zip code or country"
        prefix={<BiWorld />}
        onChange={(e) => onSearchLocation(e.target.value)}
      />
      <Radio.Group onChange={(e) => onChangeRadioLocation(e.target.value)}>
        <Space direction="vertical">
          <Radio value={"London"}>London</Radio>
          <Radio value={"Amsterdam"}>Amsterdam</Radio>
          <Radio value={"New York"}>New York</Radio>
          <Radio value={"Berlin"}>Berlin</Radio>
        </Space>
      </Radio.Group>
    </div>
  );
};
