@extends( '__app.layouts.guest' )

@if(!request()->ajax())
	
@endif
@section('content')
<div class="container-fluid text-center mt-1">

    @foreach($kb as $category => $articles)
    <div class="card-header mt-3">
    <h6 class="">{{$category}}</h6>
    </div>
    <div id='knowledgebase{{ strtolower(str_replace([' ','-'],'',$category)) }}'>  
        @foreach($articles as $k)
        <div>      
            <div>   
                <!-- accordion header -->
                <div> 
                {{ $k->title }}
                </div>
            </div>
            <div>  
                <!-- accordion content -->
                <div> 
                {!! $k->content !!}
                </div> 
            </div>
        </div>
        @endforeach
    </div>
    @endforeach
</div>

</div>
@endsection
@push('page-scripts')

<script type="text/javascript">
    $(document).ready(function() {
        
    
    @foreach($kb as $category => $articles)
        var kb{{ strtolower(str_replace([' ','-'],'',$category)) }} = new ej.navigations.Accordion({});
        //Render initialized Accordion component
        kb{{ strtolower(str_replace([' ','-'],'',$category)) }}.appendTo('#knowledgebase{{ strtolower(str_replace([' ','-'],'',$category)) }}');
    @endforeach
    
    });
</script>
@endpush


@push('page-styles')
	
<style>
.e-dialog .e-dlg-content {
    padding: 18px !important;    
    padding-top: 0px !important;
}
</style>
@endpush