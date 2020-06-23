import { Tree } from '@angular-devkit/schematics';
import { SchematicTestRunner } from '@angular-devkit/schematics/testing';
import { createEmptyWorkspace } from '@nrwl/workspace/testing';
import { join } from 'path';

import { CustomReactSchematicSchema } from './schema';

describe('custom-react schematic', () => {
  let appTree: Tree;
  const options: CustomReactSchematicSchema = { name: 'test' };

  const testRunner = new SchematicTestRunner(
    '@myorg/custom-react',
    join(__dirname, '../../../collection.json')
  );

  beforeEach(() => {
    appTree = createEmptyWorkspace(Tree.empty());
  });

  it('should run successfully', async () => {
    await expect(
      testRunner.runSchematicAsync('custom-react', options, appTree).toPromise()
    ).resolves.not.toThrowError();
  });
});
