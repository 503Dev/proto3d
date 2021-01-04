import { nanoid } from 'nanoid';
import { Model, ModelTypes } from '../../types/editor';
import { editorState, useEditorState } from './state';
import { actionContainer } from './utils';
import { createNewModel } from 'utils/model';

export function useSelectedModel() {
  let { selectedModelId, models } = useEditorState();
  return models.find(model => model.id === selectedModelId);
}

export function useIsSelectedModel(model: Model) {
  let { selectedModelId } = useEditorState();
  return selectedModelId === model.id;
}

interface AddModelArgs {
  modelUrl?: string;
  name?: string;
}
export const addModel = actionContainer({
  preform(type: ModelTypes, { modelUrl, name }: AddModelArgs = {}) {
    let id = nanoid();
    let model = createNewModel({ id, type, modelUrl, name });
    let models = [...editorState.models, model];
    Object.assign(editorState, { models, selectedModelId: id });
  },
  commitToHistory: true,
});

export function updateModelProperties(id: string, properties: Partial<Model>) {
  let selectedModel = editorState.models.find(model => model.id === id);
  Object.assign(selectedModel, properties);
}

export const deleteSelectedModel = actionContainer({
  preform() {
    let models = editorState.models.filter(
      model => model.id !== editorState.selectedModelId,
    );
    Object.assign(editorState, { models, selectedModelId: null });
  },
  commitToHistory: true,
});

export function setSelectedModel(id: string) {
  editorState.selectedModelId = id;
}
