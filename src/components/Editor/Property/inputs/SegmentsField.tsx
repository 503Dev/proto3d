/** @jsxImportSource @emotion/react */

import { Form, InputNumber, Space } from 'antd';
import { InputDefinition } from '../../../../types/editor';

const MIN = 0;

interface SegmentsProps {
  inputDefinition: InputDefinition;
  properties: any;
  onChange(properties: any): void;
}
function Segments({ inputDefinition, properties, onChange }: SegmentsProps) {
  let value = properties[inputDefinition.key];
  let [w, h] = value;

  function handleChange({
    index,
    number,
  }: {
    index: number;
    number: string | number | undefined;
  }) {
    // @ts-ignore
    let num = parseInt(number);
    if (isNaN(num)) return;

    let arr = [...value];
    arr[index] = num;
    onChange({ [inputDefinition.key]: arr });
  }

  return (
    <Form.Item label={inputDefinition.label}>
      <Space>
        <InputNumber
          css={{ width: 80 }}
          placeholder="W"
          value={w}
          onChange={number => handleChange({ index: 0, number })}
          min={MIN}
        />
        <InputNumber
          css={{ width: 80 }}
          placeholder="H"
          value={h}
          onChange={number => handleChange({ index: 1, number })}
          min={MIN}
        />
      </Space>
    </Form.Item>
  );
}

export default Segments;
