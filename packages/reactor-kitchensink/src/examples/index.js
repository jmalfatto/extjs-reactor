import Grid from './Grid/Grid';
import Panel from './Panel/Panel';
import TabPanel from './TabPanel/TabPanel';
import Toolbar from './Toolbar/Toolbar';
import Tree from './Tree/Tree';
import TreeList from './TreeList/TreeList';
import List from './List/List';
import NestedList from './NestedList/NestedList';
import Animations from './Animations/Animations';
import Button from './Button/Button';
import SegmentedButton from './SegmentedButton/SegmentedButton';
import Carousel from './Carousel/Carousel';
import TextField from './TextField/TextField';
import EmailField from './EmailField/EmailField';
import UrlField from './UrlField/UrlField';
import PasswordField from './PasswordField/PasswordField';
import SpinnerField from './SpinnerField/SpinnerField';
import CheckBoxField from './CheckBoxField/CheckBoxField';
import DatePickerField from './DatePickerField/DatePickerField';
import SelectField from './SelectField/SelectField';
import SliderField from './SliderField/SliderField';
import ToggleField from './ToggleField/ToggleField';
import TextAreaField from './TextAreaField/TextAreaField';
import RadioField from './RadioField/RadioField';
import Gauge from './Gauge/Gauge';
import FormPanel from './FormPanel/FormPanel';
import PivotGrid from './PivotGrid/PivotGrid';
import Video from './Video/Video';
import Audio from './Audio/Audio';
import ProgressBar from './ProgressBar/ProgressBar';
import EdgeMenu from './EdgeMenu/EdgeMenu';
import ActionSheet from './ActionSheet/ActionSheet';
import ToolTip from './ToolTip/ToolTip';
import Picker from './Picker/Picker';
import TouchEvents from './TouchEvents/TouchEvents';
import Msg from './Msg/Msg';
import Toast from './Toast/Toast';
import Calendar from './Calendar/Calendar';
import TitleBar from './TitleBar/TitleBar';
import BasicScatter from './BasicScatter/BasicScatter';
import BasicRadar from './BasicRadar/BasicRadar';
import BasicPie from './BasicPie/BasicPie';
import BasicLine from './BasicLine/BasicLine';
import BasicGauge from './BasicGauge/BasicGauge';
import BasicBar from './BasicBar/BasicBar';
import BasicArea from './BasicArea/BasicArea';
import BasicColumn from './BasicColumn/BasicColumn';
import Basic3DColumn from './Basic3DColumn/Basic3DColumn';
import Candlestick from './Candlestick/Candlestick';
import OHLC from './OHLC/OHLC';
import Navigator from './Navigator/Navigator';
import Draw from './Draw/Draw';
import Ripple from './Ripple/Ripple';
import ComboBoxField from './ComboBoxField/ComboBoxField';
import SalesPerEmployee from './SalesPerEmployee/SalesPerEmployee';
import PurchasesByDay from './PurchasesByDay/PurchasesByDay';
import PivotHeatmap from './PivotHeatmap/PivotHeatmap';
import ConfigurablePivotHeatmap from './ConfigurablePivotHeatmap/ConfigurablePivotHeatmap';
import SearchField from './SearchField/SearchField';
import FileField from './FileField/FileField';

import InProgress from '../InProgress';

const root = {
    id: 'root',
    children: [
        { text: 'ActionSheet', component: ActionSheet },
        { text: 'Accordion', component: InProgress },
        { text: 'Animations', component: Animations },
        { text: 'Buttons', children: [
            { text: 'Button', component: Button },
            { text: 'SegmentedButton', component: SegmentedButton },
        ]},
        { text: 'Calendar', component: Calendar },
        { text: 'Carousel', component: Carousel },
        { text: 'Charts', children: [
            { text: 'Area', children: [
                { text: 'Basic Area', component: BasicArea }
            ] },
            { text: 'Bar', children: [
                { text: 'Basic Bar', component: BasicBar }
            ] },
            { text: 'Column', children: [
                { text: 'Basic Column', component: BasicColumn }
            ] },
            { text: '3D Column', children: [
                { text: 'Basic 3D Column', component: Basic3DColumn }
            ] },
            { text: 'Financial', children: [
                { text: 'Candlestick', component: Candlestick },
                { text: 'OHLC', component: OHLC }
            ] },
            { text: 'Gauge', children: [
                { text: 'Basic Gauge', component: BasicGauge }
            ] },
            { text: 'Line', children: [
                { text: 'Basic Line', component: BasicLine }
            ] },
            { text: 'Navigator', component: Navigator },
            { text: 'Pie', children: [
                { text: 'Basic Pie', component: BasicPie }
            ] },
            { text: 'Radar', children: [
                { text: 'Basic Radar', component: BasicRadar }
            ] },
            { text: 'Scatter', children: [
                { text: 'Basic Scatter', component: BasicScatter }
            ] }
        ] },
        { text: 'D3', children: [
            { text: 'Heatmap', children: [
                { text: 'Purchases By Day', component: PurchasesByDay },
                { text: 'Sales Per Employee', component: SalesPerEmployee },
                { text: 'Pivot Heatmap', component: PivotHeatmap },
                { text: 'Configurable Pivot Heatmap', component: ConfigurablePivotHeatmap }
            ]}
        ] },
        { text: 'DatePanel', component: InProgress },
        { text: 'Draw', component: Draw },
        { text: 'EdgeMenu', component: EdgeMenu },
        { text: 'Form Fields', children: [
            { text: 'CheckBoxField', component: CheckBoxField },
            { text: 'ComboBoxField', component: ComboBoxField },
            { text: 'DatePickerField', component: DatePickerField },
            { text: 'EmailField', component: EmailField },
            { text: 'FileField', component: FileField },
            { text: 'FormPanel', component: FormPanel },
            { text: 'Gauge', component: Gauge },
            { text: 'PasswordField', component: PasswordField },
            { text: 'RadioField', component: RadioField },
            { text: 'SearchField', component: SearchField },
            { text: 'SelectField', component: SelectField },
            { text: 'SliderField', component: SliderField },
            { text: 'SpinnerField', component: SpinnerField },
            { text: 'TextAreaField', component: TextAreaField },
            { text: 'TextField', component: TextField },
            { text: 'ToggleField', component: ToggleField },
            { text: 'UrlField', component: UrlField }
        ] },
        { text: 'Grids', children: [
            { text: 'Grid', component: Grid },
            { text: 'PivotGrid', component: PivotGrid }
        ] },
        { text: 'Lists', children: [
            { text: 'List', component: List },
            { text: 'NestedList', component: NestedList }
        ]},
        { text: 'Media', children: [
            { text: 'Video', component: Video },
            { text: 'Audio', component: Audio }
        ] },
        { text: 'Msg', component: Msg },
        { text: 'Panel', component: Panel },
        { text: 'Picker', component: Picker },
        { text: 'ProgressBar', component: ProgressBar },
        { text: 'Ripple', component: Ripple },
        { text: 'TabPanel', component: TabPanel },
        { text: 'TitleBar', component: TitleBar },
        { text: 'Toast', component: Toast },
        { text: 'Toolbar', component: Toolbar },
        { text: 'TouchEvents', component: TouchEvents },
        { text: 'Trees', children: [
            { text: 'Tree', component: Tree },
            { text: 'TreeList', component: TreeList }
        ] }
    ]
};

function transform(node) {
    if (!node.id) node.id = node.text.replace(/\s/g, '');
    node.leaf = !node.hasOwnProperty('children');

    if (node.children) {
        node.children.forEach(child => transform(child))
    }
}

transform(root);

export default root;