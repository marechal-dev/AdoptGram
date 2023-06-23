import { UniqueEntityId } from '@Core/entities/value-objects/unique-entity-id';
import { User, UserProps } from './user';
import { Cpf } from './value-objects/cpf';

interface CommonUserProps extends UserProps {
  firstName: string;
  socialFirstName?: string;
  surname: string;
  cpf: Cpf;
}

export class CommonUser extends User<CommonUserProps> {
  public static create(
    props: CommonUserProps,
    id?: UniqueEntityId,
    createdAt?: Date,
    updatedAt?: Date,
  ): CommonUser {
    const commonUser = new CommonUser(props, id, createdAt, updatedAt);

    return commonUser;
  }

  public get firstName(): string {
    return this.props.firstName;
  }

  public set firstName(value: string) {
    this.props.firstName = value;
    this.touch();
  }

  public get socialFirstName(): string | undefined {
    return this.props.socialFirstName;
  }

  public set socialFirstName(value: string) {
    this.props.socialFirstName = value;
    this.touch();
  }

  public get surname(): string {
    return this.props.surname;
  }

  public set surname(value: string) {
    this.props.surname = value;
    this.touch();
  }

  public get email(): string {
    return this.props.email;
  }

  public set email(value: string) {
    this.props.email = value;
    this.touch();
  }

  public get passwordHash(): string {
    return this.props.passwordHash;
  }

  public set passwordHash(value: string) {
    this.props.passwordHash = value;
    this.touch();
  }
}
