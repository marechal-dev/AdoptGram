interface AddressProps {
  firstLine: string;
  secondLine?: string;
  number: string;
  cnpj: string;
  neighborhood: string;
  city: string;
  state: string;
}

export class Address {
  private readonly props: AddressProps;

  private constructor(props: AddressProps) {
    this.props = props;
  }

  public static create(props: AddressProps) {
    const address = new Address(props);

    return address;
  }

  public toValue(): AddressProps {
    return this.props;
  }
}
