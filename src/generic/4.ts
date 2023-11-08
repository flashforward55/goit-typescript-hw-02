/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/

interface Props {
  title: string;
}

class Component<T extends Props> {
  constructor(public props: T) { }
}

class Page extends Component<Props> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export { };
