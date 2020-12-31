/** @jsxImportSource @emotion/react */

import { SettingOutlined } from '@ant-design/icons';
import { editorState, useEditorState } from '../../../actions/editor/state';
import { IconCircleButton } from '../../common/Buttons';
import { Switch } from '../../common/controls';
import { Form } from '../../common/Form';
import { Popover, Tooltip } from '../../common/Popover';

function CanvasSettingButton() {
  let { canvasSettings } = useEditorState();

  return (
    <Popover
      title="Canvas Settings"
      content={
        <div style={{ width: '200px' }}>
          <Form>
            <Switch
              label="Show axis"
              checked={canvasSettings.showAxis}
              onChange={value => (editorState.canvasSettings.showAxis = value)}
            />
            <Switch
              label="Show Starts"
              checked={canvasSettings.showStars}
              onChange={value => (editorState.canvasSettings.showStars = value)}
            />
          </Form>
        </div>
      }
    >
      <Tooltip title="Canvas Settings">
        <IconCircleButton>
          <SettingOutlined />
        </IconCircleButton>
      </Tooltip>
    </Popover>
  );
}

export default CanvasSettingButton;
