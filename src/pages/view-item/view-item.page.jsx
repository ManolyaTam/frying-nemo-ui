import Loading from '../../components/common/loading/loading.component';
import { useState, useEffect, useContext } from 'react';
import './view-item.css';
import PlusMinusButtons from '../../components/plus-minus-buttons/plus-minus-buttons.component';
import { useParams, useNavigate } from 'react-router-dom';
import NotFound from '../not-found/not-found.page';
import { deleteItem, getItem } from '../../services/items';
import { CartContext } from '../../components/providers/cart-provider.component';

const ViewItemPage = () => {
    const [loading, setLoading] = useState(true);
    const [currentItem, setCurrentItem] = useState(null);
    const params = useParams();
    const navigate = useNavigate();
    const cartContext = useContext(CartContext);
    const getCurrentItem = async () => {
        const item = await getItem(params.id);
        if (item) setCurrentItem(item);

        else navigate("/404", { replace: true });

        setLoading(false);
        return item;
    };

    useEffect(() => {
        getCurrentItem();

    }, [params.id]);

    const getItemQuantity = (id) => {
        const currentItem = cartContext.cart?.find(item => item.meal._id === id);
        if (currentItem) {
            return currentItem.quantity;
        }
        return 0;
    };

    const deleteHandler = (id) => {
        const confirmed = window.confirm('are you sure you want to delete this item?\nthis process CANNOT be undone!');
        if (!confirmed) return;
        const res = deleteItem(id);
        if (res) {
            alert('sucessfully deleted!');
            navigate('/view');
        }
        else {
            alert('something went wrong');
        }

    };

    const updateHandler = () => {
        navigate(`/view/${params.id}/edit`);
    };

    return (
        <div className='view-item-page'>

            {loading
                ? <Loading />
                : (
                    <>
                        {currentItem
                            ? <>
                                <div className='dish-image'>
                                    <img src={currentItem.imageURL} alt={currentItem.name} />
                                </div>
                                <div className='dish-info'>
                                    <div className="item-description">
                                        <h1>{currentItem.name}</h1>
                                        <p>{currentItem.description}</p>
                                        <p><b>{currentItem.ingredients?.join(', ')}</b></p>

                                        <button className='btns' onClick={() => deleteHandler(currentItem._id)}>delete item</button>
                                        <button className='btns' onClick={() => updateHandler()} style={{ "margin": 10 }}>edit item</button>
                                    </div>
                                </div>
                                <div className="buy-item">
                                    <div className="price">
                                        <h3>${currentItem.price}</h3>
                                    </div>
                                    <PlusMinusButtons
                                        item={currentItem}
                                        quantity={getItemQuantity(currentItem._id)}
                                    />
                                </div>

                            </>
                            : <NotFound />
                        }
                    </>
                )}
        </div >
    );
};

export default ViewItemPage;