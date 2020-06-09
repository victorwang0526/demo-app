import { NgModule } from '@angular/core';
import { PipeNamePipe } from './pipe-name/pipe-name';
@NgModule({
	declarations: [PipeNamePipe],
	imports: [],
	exports: [PipeNamePipe]
})
export class PipesModule {}
