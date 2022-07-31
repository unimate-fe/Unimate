import {get} from 'lodash';

class AppError {
  readonly message: string;

  constructor(e: unknown) {
    const message: unknown = get(e, 'response.data.message');
    if (typeof message === 'string') {
      this.message = message;
    } else if (Array.isArray(message)) {
      this.message = String(message);
    } else if (typeof message === 'object') {
      this.message = JSON.stringify(message);
    } else {
      this.message = 'Unexpected Error';
    }
  }
}

export default AppError;
