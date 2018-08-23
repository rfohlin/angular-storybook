import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from '../app/shared/button/button.component'
import { ListComponent } from '../app/shared/list/list.component'

storiesOf('Our app components', module)
  .add('App Button', () => ({
    moduleMetadata: {
      declarations: [ButtonComponent]
    },
    template: `<app-button>Vår knapp</app-button>`,
  }))
  .add('List component', () => ({
    component: ListComponent,
    props: {
      listData: [
        {
          id: 1,
          name: 'Robert'
        }
      ]
    }
  }))
