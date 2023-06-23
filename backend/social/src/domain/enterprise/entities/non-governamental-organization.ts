import { UniqueEntityId } from '@Core/entities/value-objects/unique-entity-id';
import { User, UserProps } from './user';
import { Address } from './value-objects/address';
import { Cnpj } from './value-objects/cnpj';

interface NonGovernamentalOrganizationProps extends UserProps {
  title: string;
  cnpj: Cnpj;
  bio?: string;
  residentialPhone?: string;
  address: Address;
}

export class NonGovernamentalOrganization extends User<NonGovernamentalOrganizationProps> {
  public static create(
    props: NonGovernamentalOrganizationProps,
    id?: UniqueEntityId,
    createdAt?: Date,
    updatedAt?: Date,
  ) {
    const ngo = new NonGovernamentalOrganization(
      props,
      id,
      createdAt,
      updatedAt,
    );

    return ngo;
  }
}
