export const LOAD_IMG = 'LOAD_IMG';
export const LOAD_IMG_SUCCESS = 'LOAD_IMG_SUCCESS';

export function loadImages() {
  return {
    type: LOAD_IMG
  };
}

export function loadImagesSuccess() {
  return {
    type: LOAD_IMG_SUCCESS
  };
}
