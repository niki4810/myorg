import { LibrarySchematicSchema } from './schema';
import { chain, externalSchematic, Rule } from '@angular-devkit/schematics';

export default function (schema: LibrarySchematicSchema): Rule {
  return chain([
    externalSchematic('@nrwl/react', 'library', {
      name: schema.name,
      style: "none",
      publishable: true
    }),
  ]);
}

